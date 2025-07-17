import './globals.css'

export const metadata = {
  title: '스터디 헬퍼',
  description: 'PPT, 보고서, 자료 찾기, 영상 편집 대행 서비스',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
