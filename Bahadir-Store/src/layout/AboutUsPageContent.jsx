import AboutUsBanner from "@/components/AboutUsBanner"
import AboutUsSpace from "@/components/AboutUsSpace"
import ClientWithText from "@/components/ClientwithText"
import SecondAboutUsBanner from "@/components/SecondAboutUsBanner"
import Status from "@/components/Status"
import VideoContainer from "@/components/VideoContainer"
import TeamPage from "@/pages/TeamPage"

function AboutUsPageContent(){
    return(<>
    <AboutUsBanner></AboutUsBanner>
    <AboutUsSpace></AboutUsSpace>
    <Status></Status>
    <VideoContainer></VideoContainer>
    <TeamPage></TeamPage>
    <ClientWithText></ClientWithText>
    <SecondAboutUsBanner></SecondAboutUsBanner>
    </>)
}

export default AboutUsPageContent