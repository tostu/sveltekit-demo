<script lang="ts">
	import type { PageData } from './$types';

	export let data : PageData;
</script>



<form method="POST">
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>

<!--{JSON.stringify(data.todos)}-->
