export default {
	bind(el, binding) {
		const { value, arg } = binding
		const items = value ? [...el.querySelectorAll(value)] : [...el.children];
		items.forEach((item, index) => {
			const interval = index * (parseInt(arg, 10) || 100);
			const { stagger } = item.dataset;
			item.classList.add('stagger-ini');
			setTimeout(() => {
				item.classList.remove('stagger-ini');
				item.classList.add('stagger-end');
			}, stagger || interval);
		});
	},
};