import { classNames } from './classNames';

describe('classNames', () => {
	it('Передать только первый аргумент', () => {
		expect(classNames('main')).toBe('main');
	});
	it('Передать первый аргумент и доп. класс', () => {
		expect(classNames('main', {}, ['add'])).toBe('main add');
	});
	it('Передать все аргументы', () => {
		const expected = 'main add mod1 mod2';
		expect(classNames(
			'main',
			{ mod1: true, mod2: true },
			['add'],
		)).toBe(expected);
	});
	it('Один из модов false или undefined', () => {
		const expected = 'main add mod1';
		expect(classNames(
			'main',
			{ mod1: true, mod2: false, mod3: undefined },
			['add'],
		)).toBe(expected);
	});
});
