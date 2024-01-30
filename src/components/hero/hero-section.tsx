import assets from "../../assets"
import { Header } from "../../layouts"
import './hero-section.css'

export const HeroSection = () => {
	return (
		<div className="hero-section pb-[255px] relative z-10">
			<div className="container">
				<Header />

				<div className="pt-[95px] mb-[95px] text-white font-normal">
					<h2 className="other-font text-[50px] max-w-[372px] leading-[118.5%]">Накрутка зрителей на Twitch</h2>
					<p className="text-2xl leading-[118.5%] mt-8 mb-20">Увеличим вашу аудиторию в разы!</p>
					<a className="btn" href="#!">накрутить</a>
				</div>
			</div>
			<img className="absolute z-[-1] bottom-[188px]" src={assets.dotsIcon} alt="dots icon" />
		</div>
	)
}
