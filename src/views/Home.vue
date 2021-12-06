<template>
  <div class="Home">
    <h1 class="heading-primary">Investor Updates</h1>
		<div class="lead">
			<h2 class="heading-secondary">Quarterly Earnings Reports 2021</h2>
			<span class="view-all-btn">
				View All
				<span class="right-chevron">></span>
			</span>
		</div>

		<TabsWrapper >
			<Tab title="Quarter 1"><CardsGroup /></Tab>
			<Tab title="Quarter 2"><CardsGroup /></Tab>
			<Tab title="Quarter 3"><CardsGroup /></Tab>
			<Tab title="Quarter 4"><CardsGroup /></Tab>
		</TabsWrapper>
		<Card />
  </div>
</template>

<script>
import TabsWrapper from '@/components/TabsWrapper';
import Tab from '@/components/Tab';
import CardsGroup from '@/components/CardsGroup';

export default {
  components: {
		TabsWrapper,
		Tab,
		CardsGroup
  }
}
</script>

<style lang="scss" scoped>

.Home {
	max-width: 98rem;
	margin: 0 auto;

	.heading-primary {
		margin-bottom: 2.5rem;
	}

	.heading-secondary {
		font-weight: 600;
		font-size: 2rem;
		line-height: 1;
	}

	.lead {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4.5rem;
	}

	.view-all-btn {
		color: #ed7014;
		cursor: pointer;
		font-size: 1.4rem;
		font-weight: 500;
		transition: all .2s;
		letter-spacing: .2px;

		&:hover {
			color: darken($color: #ed7014, $amount: 8);
		}
	}
}

</style>