import {Flex, Heading, Loading} from "src/shared";
import {Header} from "src/widgets/header";
import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {useEffect} from "react";
import {fetchCurrencyData} from "src/store/slices/currencySlice";
import {Main} from "src/widgets/main";


function App() {
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector(state => state.currencyData)

    useEffect(()=>{
        dispatch(fetchCurrencyData())
    },[])

    if(loading === 'pending'){
        return  (
            <Flex className="bg-[#ffd6ff] text-[#3d405b] font-mono h-screen w-screen items-center justify-center">
                <Flex className={'w-[700px] h-[500px] flex-col justify-between'}>
                    <Loading/>
                </Flex>
            </Flex>
        )
    }
    return (
        <Flex className="bg-[#ffd6ff] text-[#3d405b] font-mono h-screen w-screen items-center justify-center">
            <Flex className={'w-[700px] h-[500px] flex-col justify-between'}>
                <Heading className={'text-3xl font-bold text-center'}>Приветствую в моём приложении!</Heading>
                <Header/>
                <Main />
            </Flex>
        </Flex>
    )
}

export default App
