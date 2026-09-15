import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Favicon colors match --color-primary / --color-yellow in tokens.module.css
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#6b53ff',
          borderRadius: 7,
          color: '#ffd02c',
          fontSize: 21,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        Q
      </div>
    ),
    { ...size },
  );
}
