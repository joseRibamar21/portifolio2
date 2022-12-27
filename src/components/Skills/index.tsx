import Image from "next/image";
import AnimationBall from "../Animations/Ball";
import AnimationSpin from "../Animations/Spin";
import AnimationWiggle from "../Animations/Wiggle";
import CardSkill from "../CardSkill";
import * as S from "./style";


export default function Skills() {
  const data = [
    {
      title: "React",
      list: ["Next JS", "TypeScript", "Componentização", "Hooks"],
      background: "aqua",
      color: "black"
    },
    {
      title: "Flutter",
      list: ["Gestão de estados com Streams, Getx e Providers", "Código limpo", "Arquiteturas MVC e MVP", "Responsividade"],
      background: "#085799",
      color: "white"
    },
    {
      title: "HTML5",
      list: ["Html5 + Css + JS", "Código limpo", "Responsividade"],
      background: "#085799",
      color: "white"
    },
  ]

  return (
    <div>
      <S.SkillsTitle >
        Skills
      </S.SkillsTitle>

      <S.ListSkills>

        <CardSkill title="React" skills={["Next JS", "TypeScript", "Componentização", "Hooks"]} background="aqua" color="black" >
          <AnimationSpin>
            <Image src="/assets/react.png" alt="react" width={90} height={90}  />
          </AnimationSpin>
        </CardSkill>
        <CardSkill title="Flutter" skills={["Gestão de estados com Streams, Getx e Providers", "Código limpo", "Arquiteturas MVC e MVP", "Responsividade"]} background="#085799" color="white" >
          <AnimationBall>
            <Image src="/assets/flutter.png" alt="flutter" width={90} height={90}  />
          </AnimationBall>
        </CardSkill>
        <CardSkill title="HTML5" skills={["Html5 + Css + JS", "Código limpo", "Responsividade"]} background="#e44c24" color="white" >
          <AnimationWiggle>
            <Image src="/assets/html5.png" alt="flutter" width={90} height={90}  />
          </AnimationWiggle>
        </CardSkill>
      </S.ListSkills>
    </div>
  )
}
