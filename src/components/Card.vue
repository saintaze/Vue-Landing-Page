<template>
	<div class="Card">
		<div class="header">
			<img class="img" :src="imgSrc" alt="image">
		</div>
		<div class="content">
			<div class="title">{{titleText}}</div>
			<div class="link">View</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: String,
		titleText: String
	}
}

</script>

<style lang="scss" scoped>

.Card {
	text-align: center;

	&:hover {
		cursor: pointer;
		transition: all .1s;
		box-shadow: 0px 3px 0px 0px #ed6e1486;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.header {
		height: 200px;
	}

	.title {
		color: cornflowerblue;
		margin-bottom: 1.9rem;
		line-height: 1;
		font-weight: 500;
		letter-spacing: .2px;
	}

	.link {
		color: #ed7014;
		line-height: 1;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.content {
		background-color: #eee;
		padding: 1.7rem;
	}
}

</style>