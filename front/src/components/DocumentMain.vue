<template>
	<div class="document-main">
		<div class="document-main__head">
			<h3>Основная информация</h3>
			<p>Ввод сведений</p>
		</div>
		<div class="document-main__body">
			<div class="document-main__left">
				<div class="document-main__left-top">
					<div class="document-main__item">
						<p>Реестровый номер</p>
						<span>Не присвоен</span>
					</div>
					<div class="document-main__item">
						<p>Осуществленная закупка</p>
						<span>000565-23</span>
					</div>
					<div class="document-main__item">
						<p>В соответствии с законом</p>
						<span>44-ФЗ</span>
					</div>
					<div class="document-main__item">
						<p>Способ размещения</p>
						<span>Единственный поставщик</span>
					</div>
					<div class="document-main__item">
						<p>Основание заключения</p>
						<span>п.4ч. 1 с. 93 Закупка объемом до 600 тысяч рублей</span>
					</div>
				</div>
				<div class="document-main__left-bottom">
					<div class="document-main__item">
						<p>Сумма</p>
						<span>220.000 ₽</span>
					</div>
					<div class="document-main__item">
						<p>Аванс (₽)</p>
						<div class="document-main__item-avans">
							<div class="checkbox">
								<input type="checkbox" id="avans" name="avans" :checked="form.Avans > 0" @change="changeData"/>
								<label for="avans">
									<InlineSvg svg="check" class="checkbox-check"/>
								</label>
							</div>
							<input 
								type="number" 
								id="avans-money" 
								name="avans-money" 
								placeholder="Размер аванса"
								class="input" 
								v-model="form.Avans"
								@change="changeData"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="document-main__right">
				<div class="document-main__right-top">
					<div class="document-main__item">
						<button class="document-main__item-change">
							<InlineSvg svg="change" />
						</button>
						<p>Номер*</p>
						<input 
							type="text" 
							id="number" 
							name="number" 
							placeholder="ПРМ-0845/1123"
							class="input" 
							v-model="form.Number"
							@change="changeData"
						/>
					</div>
					<div class="document-main__item">
						<button class="document-main__item-change">
							<InlineSvg svg="change" />
						</button>
						<p>Период действия*</p>
						<div class="document-main__item-date">
							<div>
								<p>с</p>
								<input 
									type="text" 
									id="before" 
									name="before" 
									placeholder="23.12.2023"
									class="input"
									v-model="form.Period" 
									@change="changeData"
								/>
							</div>
							<div>
								<p>по</p>
								<input 
									type="text" 
									id="after" 
									name="after" 
									placeholder="23.12.2023"
									class="input" 
									v-model="form.dateEnd" 
									@change="changeData"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="document-main__item document-main__item-hight">
					<button class="document-main__item-change">
						<InlineSvg svg="change" />
					</button>
					<p>Предмет контракта*</p>
					<textarea 
						type="text" 
						id="item-contract" 
						name="item-contract" 
						placeholder="Провод монтажный витой Мезонин 2х1,5 мм в декоративной оплетке для отрытой проводки"
						class="input"
						v-model="form.Predmet" 
						@change="changeData"
					></textarea>
				</div>
				<div class="document-main__item">
					<button class="document-main__item-change">
						<InlineSvg svg="change" />
					</button>
					<p>Место заключения*</p>
					<input 
						type="text" 
						id="place" 
						name="place" 
						placeholder="Пермь, пр. Мира, д. 1"
						class="input" 
						v-model="form.Mesto" 
						@change="changeData"
					>
				</div>
				<div class="document-main__item">
					<button class="document-main__item-change">
						<InlineSvg svg="change" />
					</button>
					<p>ИД-код закупки* (36 цифр)</p>
					<input 
						type="text" 
						id="code" 
						name="code" 
						placeholder="221230104092423010100101370018425244"
						class="input" 
						v-model="form.IKZ" 
						@change="changeData"
					>
				</div>
				<div class="document-main__item">
					<button class="document-main__item-change">
						<InlineSvg svg="change" />
					</button>
					<p>Источник финансирования*</p>
					<div class="document-main__item-nds">
						<input 
							type="text" 
							id="financing" 
							name="financing" 
							placeholder="«Смешанное» финансирование"
							class="input" 
							v-model="form.Istochnik" 
							@change="changeData"
						>
						<div class="checkbox">
							<input type="checkbox" id="nds" name="nds" v-model="form.nds" @change="changeData"/>
							<label for="nds">
								<InlineSvg svg="check" class="checkbox-check"/>
							</label>
							<p>НДС не облагается</p>
						</div>
					</div>
				</div>
			</div>
			<!-- {{ lastVersionData }} -->
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import InlineSvg from '../components/InlineSvg.vue';
import {useDocumentsStore} from '../stores/document';
	const {
		formProps
	} = defineProps();

	const { setNewFormData } = useDocumentsStore();
	const { getLastVersion } = useDocumentsStore();
	const lastVersionData = useDocumentsStore();

	const form = ref({
		Avans: null,
		Number: null,
		Period: null,
		Predmet: null,
		Mesto: null,
		IKZ: null,
		Istochnik: null,
	})

	const changeData = () => {
		setNewFormData(form.value);
	};
	onMounted(
		() => {
			getLastVersion();

			setTimeout(() => {
				let data = JSON.parse(JSON.stringify(lastVersionData)).lastVersionData;
				console.log(data);
				form.value = {
					Avans: data?.Avans,
					Number: data?.Number,
					Period: data?.Period,
					Predmet: data?.Predmet,
					Mesto: data?.Mesto,
					IKZ: data?.IKZ,
					Istochnik: data?.Istochnik
				};
			}, 1500);
			
		}
	)
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.document-main
	margin-top: 24px
	background: $white
	padding: 24px
	border-radius: 10px

	&__head
		display: flex
		justify-content: space-between
		align-items: center

		& h3
			font-size: 18px
			font-weight: 600

		& p
			padding: 4px 12px
			background: #FF8761
			border-radius: 1000px
			color: white
			line-height: 1.5

	&__body
		margin-top: 25px
		display: flex
		justify-content: space-between
		grid-gap: 50px

	&__left
		display: flex
		flex-direction: column
		justify-content: space-between
		width: 50%

	&__left-top
		display: flex
		flex-wrap: wrap
		grid-column-gap: 40px
		grid-row-gap: 24px

		.document-main__item
			width: calc(50% - 20px)

			&:last-child
				width: 100%
	
	&__item
		position: relative
		display: flex
		flex-direction: column
		grid-gap: 12px
		font-size: 14px

		&:hover
			.document-main__item-change
				opacity: 1

		& p
			line-height: 1.4

		& span
			font-weight: 600
			color: $grey

	&__left-bottom
		display: flex
		justify-content: space-between
		grid-gap: 28px

		.document-main__item
			width: calc(50% - 28px)

			&:first-child
				& span
					font-size: 32px
					font-weight: 700
					color: $dark-blue

	&__item-avans
		display: flex
		align-items: center
		grid-gap: 16px

	&__item-change
		position: absolute
		top: 0
		right: 0
		opacity: 0
		transition: .3s all
		cursor: pointer

		&:hover
			opacity: .5 !important

	&__item-date
		display: flex
		grid-gap: 16px

		& div
			display: flex
			align-items: center
			grid-gap: 8px

	&__right
		width: 50%
		display: flex
		flex-direction: column
		grid-gap: 24px

	&__right-top
		display: flex
		grid-gap: 24px

	&__item-hight
		.input
			height: 56px
			resize: none
			font-family: inherit

	&__item-nds
		display: flex
		align-items: center
		grid-gap: 24px

		& input
			width: 50%

		& .checkbox
			display: flex
			align-items: center
			grid-gap: 16px
</style>