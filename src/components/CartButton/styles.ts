import { styled } from "../../styles"


export const CartButtonContainer = styled('aside', {
    backgroundColor: '$gray900',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    padding: '3rem',
    
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 1,

    width: 480,
    height: '100vh',
    
        h1: {
            gridColumn: 'span 2',
            marginBottom: 32,
            fontSize: '$ld',
            color: '$gray100',
        },

    '> div': {
        position: 'absolute',
        left: 'auto',
        bottom: 50,
        width: 'calc(100% - 48px * 2)',

        '> div': {
 
            p: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                color: '$gray100',
                lineHeight: 1.6,
                
                '&:last-child': {
                    fontWeight: 'bold',
                    fontSize: '$md',

                    strong: {
                        fontSize: '$xl',
                    }
                }
            },
        },

        span: {
            background: 0,

            '&:hover': {
                opacity: 1,
                cursor: 'auto',
            }
        },


        button: {
            backgroundColor: '$green500',
            border: 0,
            color: '$white',
            borderRadius: 8,
            padding: '1.25rem 2rem',
            
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '$md',
            transition: 'background-color 0.2s',
    
            marginTop: '3.5rem',
            width: '100%',
    
            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
            },
    
            '&:not(:disabled):hover': {
                backgroundColor: '$green300'
            },
        },
    }
})

export const CloseContainer = styled('div', {
    position: 'absolute',
    top: 24,
    right: 24,
    color: '$gray300',

    '&:hover': {
        cursor: 'pointer',
    }
})

export const ProductContainer = styled('section', {
    display: 'grid',
    gridTemplateColumns: '102px 1fr',
    rowGap: '1.5rem',
    columnGap: '1.25rem',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 102,
    height: 93,

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDatails = styled('div', {   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: '0.375rem',


    h2: {
        fontSize: '$md',
        color: '$gray300'
    },

    span: {
        display: 'block',
        fontSize: '$md',
        fontWeight: 'bold',
        color: '$gray100',
        background: 0,
        padding: 0,

        '&:hover': {
            opacity: 1,
            cursor: 'auto',
        }
    },

    '> button': {
        border: 0,
        color: '$green500',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$ld',
        transition: 'background-color 0.2s',
        background: 0,
        marginTop: 4,

        '&:hover': {
            color: '$green300'
        },
    },
})