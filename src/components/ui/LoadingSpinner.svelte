<!-- ring -->
<div class="spinner flex justify-center pt-10">
	<div />
	<div />
	<div />
	<div />
</div>

<style>
	.spinner div {
		box-sizing: border-box;
		position: absolute;
		width: 80px;
		height: 80px;
		border: 8px solid;
		border-radius: 50%;
		animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: rgb(219 39 119) transparent transparent transparent;
	}

	.spinner div:nth-child(1) {
		animation-delay: -0.45s;
	}

	.spinner div:nth-child(2) {
		animation-delay: -0.3s;
	}

	.spinner div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
