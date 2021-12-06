<template>
	<div>
		<nav class="Navbar">
			<ul class="menuList">
				<li class="menuItem selected">Home</li>
				<li class="menuItem">Financials</li>
				<li class="menuItem">Capital Markets</li>
				<li class="menuItem">Events</li>
				<li class="menuItem">Announcements</li>
				<li class="menuItem">Library</li>
				<li class="menuItem">Contact</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

.Navbar {
	display: flex;
	justify-content: center;
	background-color: #a4a3a4;
	padding: 1rem 0 0.5rem;
	box-shadow: 0 .4rem .5rem rgba(0,0,0,0.12), 0 .1rem .2rem rgba(0,0,0,0.24);
	margin-bottom: 1rem;

	.menuList {
		display: flex;
		list-style: none;
		padding: 0 5.2rem;
		border-bottom: .3rem solid #c4c3c5;
	}

	.menuItem {
		color: white;
		cursor: pointer;
		transition: all .2s;
		font-size: 1.5rem;
		padding: 0 2.8rem 1rem;
		text-align: center;
		border-bottom: .3rem solid #c4c3c5;
		margin-bottom: -.3rem;

		&:hover {
			border-bottom: .3rem solid #e57042;
		}
	}

	.selected {
		border-bottom: .3rem solid #e57042;
	}
}

</style>