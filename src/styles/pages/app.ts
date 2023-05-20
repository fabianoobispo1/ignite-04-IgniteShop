import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
})


export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
        backgroundColor: '$gray800',
        padding: '0.75rem',
        borderRadius: 6,
        color: '$gray300',
        cursor: 'pointer',

        position: 'relative',

        '&:hover': {
            opacity: 0.6,
        },

        p: {
            position: 'absolute',
            top: -10,
            right: -10,

            backgroundColor: '$green500',
            color: '$gray100',
            borderRadius: 999,
            fontSize: '0.875rem',
            fontWeight: 'bold',

            textAling: 'center',
            padding: '4px',


        }
    },
})