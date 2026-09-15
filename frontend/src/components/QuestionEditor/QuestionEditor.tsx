'use client';

import { QuestionType } from '@/services/quizzes';
import styles from './QuestionEditor.module.css';

export interface EditableOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface EditableQuestion {
  id: string;
  type: QuestionType;
  text: string;
  correctBoolean: boolean;
  correctText: string;
  options: EditableOption[];
}

interface QuestionEditorProps {
  index: number;
  question: EditableQuestion;
  onChange: (question: EditableQuestion) => void;
  onRemove: () => void;
  canRemove: boolean;
}

function emptyOption(): EditableOption {
  return { id: crypto.randomUUID(), text: '', isCorrect: false };
}

export default function QuestionEditor({
  index,
  question,
  onChange,
  onRemove,
  canRemove,
}: QuestionEditorProps) {
  function handleTypeChange(type: QuestionType) {
    onChange({
      ...question,
      type,
      options:
        type === 'CHECKBOX' && question.options.length === 0
          ? [emptyOption(), emptyOption()]
          : question.options,
    });
  }

  function updateOption(optionId: string, changes: Partial<EditableOption>) {
    onChange({
      ...question,
      options: question.options.map((option) =>
        option.id === optionId ? { ...option, ...changes } : option,
      ),
    });
  }

  function addOption() {
    onChange({ ...question, options: [...question.options, emptyOption()] });
  }

  function removeOption(optionId: string) {
    onChange({ ...question, options: question.options.filter((option) => option.id !== optionId) });
  }

  return (
    <fieldset className={styles.question}>
      <div className={styles.header}>
        <span className={styles.badge}>Question {index + 1}</span>
        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          className={styles.removeButton}
        >
          Remove
        </button>
      </div>

      <label className={styles.field}>
        <span>Question text</span>
        <input
          type="text"
          value={question.text}
          onChange={(e) => onChange({ ...question, text: e.target.value })}
          placeholder="e.g. The Earth is round."
          required
        />
      </label>

      <label className={styles.field}>
        <span>Question type</span>
        <select
          value={question.type}
          onChange={(e) => handleTypeChange(e.target.value as QuestionType)}
        >
          <option value="BOOLEAN">True / False</option>
          <option value="INPUT">Short text</option>
          <option value="CHECKBOX">Multiple choice</option>
        </select>
      </label>

      {question.type === 'BOOLEAN' && (
        <div className={styles.field}>
          <span>Correct answer</span>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name={`boolean-${question.id}`}
                checked={question.correctBoolean === true}
                onChange={() => onChange({ ...question, correctBoolean: true })}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name={`boolean-${question.id}`}
                checked={question.correctBoolean === false}
                onChange={() => onChange({ ...question, correctBoolean: false })}
              />
              False
            </label>
          </div>
        </div>
      )}

      {question.type === 'INPUT' && (
        <label className={styles.field}>
          <span>Correct answer</span>
          <input
            type="text"
            value={question.correctText}
            onChange={(e) => onChange({ ...question, correctText: e.target.value })}
            placeholder="e.g. Paris"
            required
          />
        </label>
      )}

      {question.type === 'CHECKBOX' && (
        <div className={styles.field}>
          <span>Options</span>
          {question.options.map((option) => (
            <div key={option.id} className={styles.option}>
              <input
                type="checkbox"
                checked={option.isCorrect}
                onChange={(e) => updateOption(option.id, { isCorrect: e.target.checked })}
                title="Mark as correct"
              />
              <input
                type="text"
                value={option.text}
                onChange={(e) => updateOption(option.id, { text: e.target.value })}
                placeholder="Option text"
                className={styles.optionInput}
                required
              />
              <button
                type="button"
                onClick={() => removeOption(option.id)}
                disabled={question.options.length <= 2}
                className={styles.removeOptionButton}
              >
                &times;
              </button>
            </div>
          ))}
          <button type="button" onClick={addOption} className={styles.addOptionButton}>
            + Add option
          </button>
        </div>
      )}
    </fieldset>
  );
}
