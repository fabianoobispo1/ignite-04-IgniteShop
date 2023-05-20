import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ImageContainer, CartButtonContainer, ProductDatails, ProductContainer, CloseContainer } from "./styles";


interface CartButtonProps {
    asideShow: () => void
}

export function CartButton({ asideShow }: CartButtonProps) {
    const { cartDetails, removeItem, formattedTotalPrice, cartCount, redirectToCheckout } = useShoppingCart()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const entries = []

    for (const id in cartDetails) {
        const entry = cartDetails[id]

        entries.push(
            <>
                <ImageContainer key={entry.id}>
                <Image src={entry.imageUrl} width={95} height={95} alt='' />
                </ImageContainer>
                <ProductDatails>
                    <h2>{entry.name}</h2>
                    <span>{entry.formattedPrice}</span>
                    <button onClick={() => removeItem(id)}>Remover</button>
                </ProductDatails>
            </>
        )
    }
        async function handleBuyProduct() {
            if (cartCount! > 0) {
                try {
                    setIsCreatingCheckoutSession(true)
                    
                    const result = await redirectToCheckout()
                    if (result?.error) {
                        console.error(result)
                  }
                } catch (error) {
                    console.error(error)
                    setIsCreatingCheckoutSession(false)
                }
            }
        }
        
    return (
        <CartButtonContainer>
                <h1>Sacola de Compras</h1>

            <ProductContainer>
                <CloseContainer onClick={asideShow}>
                    <X size={24} weight="bold" />
                </CloseContainer>

               {entries}

            </ProductContainer>
            <div>
                <div>
                    <p>Quantidade <span>{cartCount} itens</span></p>
                    <p>Valor total <strong>{formattedTotalPrice}</strong></p>
                </div>
                <button 
                disabled={isCreatingCheckoutSession}
                onClick={handleBuyProduct}
                >Finalizar compra</button>
            </div>
        </CartButtonContainer>


    )
}