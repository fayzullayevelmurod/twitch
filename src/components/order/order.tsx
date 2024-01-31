import './order.css';
export const Order = () => {
	return (
		<div className="order mt-[45px] pt-[60px]" id="order">
			<div className="container">
				<div className="bg-pink rounded-[0.7rem] md:rounded-[6rem]">
					<div className="relative bg-black-pink white-bg w-full rounded-br-[5rem] pl-[60px] pt-[77px] pb-[84px] pr-[99px] rounded-[0.75rem] md:rounded-br-[15rem] ">
						<h3 className="relative text-2xl mb-[54px] text-white font-2MASS-J1808 uppercase dark-text">Введите свои контактные данные и мы с Вами свяжемся</h3>
						<form className="flex gap-[80px] items-end">
							<div className="w-[560px]">
								<div className="flex gap-[40px]">
									<input className="dark-input rounded-md w-full py-[14px] pl-[27px]" type="text" name="name" placeholder="Введите имя" />
									<input className="dark-input rounded-md w-full py-[14px] pl-[27px]" type="email" name="email" placeholder="Введите почту" />
								</div>
								<textarea className="dark-input rounded-md pt-[14px] pl-[27px] mt-[28px] h-[166px] w-full resize-none" placeholder="Введите текст"></textarea>
							</div>
							<input type="submit" value='Отправить' className="btn mb-[44px]" />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
