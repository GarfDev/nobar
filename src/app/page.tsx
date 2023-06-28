"use client"

import Logo from '../../public/no-bar-logo.png'
import BackgroundOne from '../../public/background-one.jpg'

import {NavigationBar, Parallax} from "@/components";
import {motion, useScroll, useTransform} from "framer-motion";
import styled from "styled-components";

export default function Home() {

  const {scrollY} = useScroll()
  const bgRange = useTransform(scrollY, [400, 700], ['#faf9f5', '#643A6B'])

  return (
    <motion.main style={{backgroundColor: bgRange}} className={`w-full min-h-[200vh] h-[max-content]`}>
      <Parallax className="absolute mt-[50px] w-full h-[125]" offset={100}>
        <NavigationBar/>
      </Parallax>
      <section className="h-[100vh] pt-24 px-24 w-full flex">
        <Parallax className="w-full flex items-center justify-center " offset={100}>
          <img alt="nobar-logo" className="w-[30%]" src={Logo.src}/>
        </Parallax>
      </section>

      <section className="relative h-[100vh] flex start w-full">
        <Parallax className="z-[0] bottom-[10%] -left-[6%] absolute" offset={150}>
          <TriangleThree>

          </TriangleThree>
        </Parallax>
        <div className="z-[1] flex-[1] flex flex-col items-start relative justify-center">
          <Parallax className="w-full uppercase leading-[1.3] mx-24 font-semibold text-7xl" offset={100}>
            <GradientText>
              Không gian, thời gian, đa chiều, đa hướng,<br/> No bar.
            </GradientText>
          </Parallax>
          <Parallax className="w-[70%] mx-24 -mt-10 font-medium" offset={110}>
            mạnh dạng đi tìm hơi thở của thời đại, phá vỡ cấu trúc để kiến tạo không gian theo trường phái lập
            thể, tìm những táo bạo ấy, trong hơi thở thời đại, của người sáng tạo nó, của người thưởng lãm nó,
            trong một Đà Lạt thập kỉ mới.
          </Parallax>


        </div>

        <div className="flex-[1] flex items-center justify-center">
          <Parallax className="w-[50%] h-[70%]" offset={100}>
            <Parallax offset={0} style={{
              background: `url(${BackgroundOne.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }} className="relative w-[100%] rounded-t-full h-[100%]">
              <Parallax className="z-[3] bottom-[30%] -right-24 absolute" offset={400}>
                <Triangle>

                </Triangle>
              </Parallax>

              <Parallax className="z-[3] bottom-[20%] -right-24 absolute" offset={150}>
                <TriangleTwo>

                </TriangleTwo>
              </Parallax>
            </Parallax>
          </Parallax>
        </div>

      </section>
    </motion.main>
  )
}

const GradientText = styled.span`
  background: linear-gradient(to right,
  #FCD8D4 20%,
  #FFDE7D 50%,
  #FFD460 70%,
  #F5C6AA 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 3s ease-in-out infinite alternate;

  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 0 300px 300px;
  border-color: transparent transparent #5F264A transparent;
  transform: rotate(34deg);
`

const TriangleTwo = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 0 300px 300px;
  border-color: transparent transparent #957777 transparent;
  transform: rotate(60deg);
`

const TriangleThree = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 0 1000px 1100px;
  border-color: transparent transparent #5F264A transparent;
  transform: rotate(30deg);
`

const TriangleFour = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 0 600px 500px;
  border-color: transparent transparent #5F264A transparent;
  transform: rotate(140deg);
`