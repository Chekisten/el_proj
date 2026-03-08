import { useRouter } from "next/router"
import MainContainer from "../../components/mainContainer";

export default function () {
    const router = useRouter();
    console.log(router)
    return (
        <MainContainer>
            Tours
        </MainContainer>
    )

}