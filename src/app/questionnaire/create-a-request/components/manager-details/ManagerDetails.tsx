import React, { useEffect, useState } from "react";
import Title from "@/app/questionnaire/create-a-request/components/Title";
import { cn } from "@/lib/utils";
import InputForm from "@/app/questionnaire/create-a-request/components/InputForm";
import InputPhone from "@/app/questionnaire/create-a-request/components/InputPhone";
import CheckBox from "./CheckBox";

const ManagerDetails = () => {
	const [isChecked, setIsChecked] = useState(false);

	const [disabled, setIsDisabled] = useState(false);

	const handleCheckedChange = () => {
		setIsChecked(!isChecked);
		console.log(isChecked);
	};

	useEffect(() => {
		setIsDisabled(!isChecked);
	}, [isChecked]);

	return (
		<div>
			<Title text={"Данные руководителя / подписанта"} />
			<div className={cn("grid grid-cols-2 gap-4 mt-4 px-1")}>
				<div className={"flex flex-col gap-4"}>
					<Title
						text={"Руководитель СТО"}
						className={cn("text-xl")}
					/>
					<InputForm
						id={"lastname-manager"}
						placeholder={"Фамилия"}
						type={"text"}
						label={"Фамилия"}
					/>
					<InputForm
						id={"name-manager"}
						placeholder={"Имя"}
						type={"text"}
						label={"Имя"}
					/>
					<InputForm
						id={"surname-manager"}
						placeholder={"Отчество"}
						type={"text"}
						label={"Отчество"}
					/>
					<InputPhone
						name={"phone-manager"}
						id={"phone-manager"}
						label={"Телефон"}
						placeholder={"+7 (999) 999 99 99"}
					/>
					<InputForm
						id={"mail-manager"}
						placeholder={"E-Mail"}
						type={"email"}
						label={"Адрес электронной почты"}
					/>
					<CheckBox
						className='mt-3'
						checked={!isChecked}
						onCheckedChange={handleCheckedChange}
					/>
				</div>
				<div className={"flex flex-col gap-4"}>
					<Title
						text={"Подписант"}
						className={cn("text-xl")}
						span={"*"}
					/>

					<InputForm
						id={"lastname-signatory-manager"}
						placeholder={"Фамилия"}
						type={"text"}
						label={"Фамилия подписанта"}
						disabled={disabled}
					/>
					<InputForm
						id={"name-signatory-manager"}
						placeholder={"Имя подписанта"}
						type={"text"}
						label={"Имя подписанта"}
						disabled={disabled}
					/>
					<InputForm
						id={"surname-signatory-manager"}
						placeholder={"Отчество подписанта"}
						type={"text"}
						label={"Отчество подписанта"}
						disabled={disabled}
					/>
					<InputPhone
						name={"phone-signatory-manager"}
						id={"phone-signatory-manager"}
						label={"Телефон подписанта"}
						placeholder={"+7 (999) 999 99 99"}
						disabled={disabled}
					/>
					<InputForm
						id={"mail-signatory-manager"}
						placeholder={"E-Mail подписанта"}
						type={"email"}
						label={"Email подписанта"}
						disabled={disabled}
					/>
					<p className={"text-red-600 text-xs pl-1 h-12 block mt-2"}>
						* Будьте внимательны при заполнении -данные используется
						для подписания договора оферты и получения доступа к
						личному кабинету
					</p>
				</div>
			</div>
		</div>
	);
};

export default ManagerDetails;
