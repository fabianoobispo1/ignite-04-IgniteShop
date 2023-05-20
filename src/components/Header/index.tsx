import Image from "next/image";
import Link from "next/link";
import { Handbag } from 'phosphor-react'
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import logoImg from '../../assets/logo.svg'
import { CartButton } from "../CartButton";


export function HeaderComponent() {
    const [showAsideShoppingBag, setAsideShoppingBag] = useState(false)
    const { cartCount } = useShoppingCart()

    function changeStatesAside() {
         setAsideShoppingBag(!showAsideShoppingBag)
    }


    return (
        <>
            <Link href={'/'}>
                <Image src={logoImg} alt="" />
            </Link>
            <span onClick={changeStatesAside}>
            <Handbag size={24} weight="bold" />
            <p>{cartCount}</p>
            </span>
            {showAsideShoppingBag && (
            <CartButton asideShow={changeStatesAside}/>
            )}
        </>
    )
}