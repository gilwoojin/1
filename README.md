import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card";

export default function StudyHelperHome() { return ( <main className="p-6 max-w-5xl mx-auto space-y-12"> <section className="text-center space-y-4"> <h1 className="text-4xl font-bold">스터디 헬퍼</h1> <p className="text-lg text-muted-foreground"> PPT 제작부터 보고서, 자료 찾기, 영상 편집까지 ONE STOP 대행 서비스 </p> <div className="flex justify-center gap-4"> <Button> <a href="https://instagram.com/wo.jn00" target="_blank" rel="noopener noreferrer"> 인스타 문의 </a> </Button> <Button variant="outline"> <a href="https://open.kakao.com/o/s500060009000" target="_blank" rel="noopener noreferrer"> 카카오톡 문의 </a> </Button> </div> </section>

<section className="space-y-6">
    <h2 className="text-2xl font-semibold text-center">📋 제공 서비스</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "PPT 제작",
          price: "15,000 ~ 30,000원",
          description: "10장 내외, 디자인 포함, 2일 내 완성"
        },
        {
          title: "보고서 대행",
          price: "20,000 ~ 40,000원",
          description: "5~10페이지 분량, 내용작성+편집 포함"
        },
        {
          title: "자료 찾기",
          price: "10,000 ~ 20,000원",
          description: "신뢰 자료 3~5건 정리, 참고문헌 포함"
        },
        {
          title: "영상 편집",
          price: "25,000 ~ 50,000원",
          description: "1~3분 영상, 컷 편집+자막 삽입 포함"
        }
      ].map((service) => (
        <Card key={service.title}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-1">{service.price}</p>
            <p className="text-sm">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  <section className="bg-muted rounded-xl p-6 space-y-4">
    <h2 className="text-2xl font-semibold">🎉 할인 혜택</h2>
    <ul className="list-disc pl-6 text-sm space-y-1">
      <li>첫 주문 고객 10% 할인</li>
      <li>2개 서비스 동시 주문 시 15% 할인</li>
      <li>3개 이상 서비스 주문 시 20% 할인</li>
      <li>친구 추천 시 추천인/피추천인 모두 5,000원 할인 쿠폰 지급</li>
      <li>3회 이상 이용 시, 추가 할인 또는 무료 자료 찾기 제공</li>
    </ul>
  </section>

  <section className="text-center pt-10 text-muted-foreground text-sm">
    © 2025 Study Helper. 인스타 @wo.jn00 · 카카오톡 500060009000
  </section>
</main>

); }

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>스터디 헬퍼</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 700px;
        margin: 80px auto;
        text-align: center;
      }
      h1 {
        font-size: 2.5rem;
        color: #222;
      }
      p {
        margin: 10px 0;
        color: #555;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <h1>스터디 헬퍼</h1>
    <p>PPT 제작 · 보고서 · 자료 찾기 · 영상 편집</p>
    <p>인스타: <a href="https://instagram.com/wo.jn00" target="_blank">@wo.jn00</a></p>
    <p>카카오톡: 500060009000</p>
  </body>
</html>