import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'
import { FaMeetup, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { Button } from '@/components/Button'


function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-24 w-auto" />
        </Link>
      </div>
      <h1 className="mt-2 ml-3 font-display text-4xl/tight font-light text-white">
        <span className="text-white-400">Embajadoras Cloud</span>
      </h1>
      <p className="mt-4 ml-3 text-sm/6 text-gray-300">
      La comunidad de Embajadoras Cloud se ha creado con el objetivo de impulsar a las mujeres de habla hispana a aprender de forma colaborativa sobre Cloud Computing con AWS, con el fin de hacer posible que más mujeres sobresalgan en la industria, desarrollando habilidades técnicas y de carrera.
      <br/>
      </p>
      <div className="flex flex-wrap justify-center mt-5">
        <Button type="submit" href="https://bit.ly/embajadoras-cloud-aws" className="hover:bg-orange-600" arrow>
          Únete a la comunidad
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="https://www.meetup.com/es/embajadoras-cloud/" icon={FaMeetup} className="flex-none">
          Meetup
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/comunidad-de-embajadoras-cloud/" icon={FaLinkedinIn} className="flex-none">
          Linkedin
        </IconLink>
        <IconLink href="https://www.facebook.com/EmbajadoraCloud" icon={FaFacebookF} className="flex-none">
          Facebook
        </IconLink> 
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Hecho con amor por{' '}
      <IconLink href="https://twitter.com/EmbajadoraCloud" icon={TwitterIcon} compact large>
        Embajadoras Cloud
      </IconLink>
    </p>
  )
}
