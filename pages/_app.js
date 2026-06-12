import "../styles/global.css"
import { Montserrat } from 'next/font/google';
import { Playfair_Display} from 'next/font/google';
import { Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: [ '400', '500','600', '700','800', '900'],
  variable: '--font-montserrat',
});
const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: [ '400', '500','600', '700','800', '900'],
  variable: '--font-playfair', // Для использования через CSS переменную
});
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans', // This creates the variable for you
});

export default function MyApp({Component, pageProps}){
    return (
        <main className={`${montserrat.variable} ${playfair.variable} ${openSans.variable} font-sans`}>
            <Component {...pageProps}/>
        </main>
    ) 
}