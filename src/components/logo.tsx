import Image from 'next/image'

import masturbator from '../../public/images/category_icons/noun-sex-toy-35379.svg'

type ILogoProps = {
    xl?: boolean
}
const divStyle = {
    fill: '#ddd6ff',
}
const Logo = (props: ILogoProps) => {
    const size = props.xl ? '34' : '32'

    return (
        <Image
            alt="logo.svg"
            src={masturbator}
            quality={100}
            width={size}
            height={size}
            style={divStyle}
        />
    )
}

export { Logo }
