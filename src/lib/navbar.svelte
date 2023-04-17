<script>
    import { base } from "$app/paths";
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Abrir  menu</span>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
                    <!-- aca esta el icono -->
					<img
						class="block h-8 w-auto lg:hidden"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
					<img
						class="hidden h-8 w-auto lg:block"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="{base}/"
							class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
							aria-current="page">Inicio</a
						>

						<a
							href="{base}/calendario"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							>Calendario</a
						>

						<a
							href="{base}/agenda"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							>Agenda</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
                href="{base}/"
				class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
				aria-current="page">Inicio</a
			>

			<a
                href="{base}/calendario"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Calendario</a
			>

			<a
                href="{base}/agenda"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Agenda</a
			>
		</div>
	</div>
</nav>
