"use strict";

// Задаем стандартные пути
const paths = {
	styles: {
		src: 'styles/styles.scss',
		dest: 'public/styles'
	},
	scripts: {
		src: '',
		dest: ''
	},
	img: {
		src: 'img/*.{png,jpg}',
		dest: 'public/img'
	}
}

const gulp = require('gulp'); // Подключаем Gulp
const	sass = require('gulp-sass'); //Подключаем Sass пакет,
const	browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const	autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов
const	cssnano = require('gulp-cssnano'); // Подключаем библиотеке для минификации CSS файлов
const rename = require('gulp-rename'); // Подключаем бибилиотеку для переименования файлов
const htmlmin = require('gulp-htmlmin'); // Подключаем библиотеку для минификации HTML файлов
const tinymin = require('gulp-tinypng'); // Подключаем библиотеку для оптимизации картинок через  ресурс tinypng
const imageMin = require("gulp-imagemin"); // Подключаем библиотеку для оптимизации картинок gulp-плагином
const webp = require("gulp-webp"); // Подключаем библиотеку дляконвертации картинок в формат webP


function sassConvertInCss(){ // Создаем таск Sass
	return gulp.src(paths.styles.src) // Берем источник
		.pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass и логируем ошибки
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('./styles')) // Выгружаем результат
		.pipe(browserSync.reload({stream: true})) // Обновляем страницу при изменении CSS стилей
};

function cssmin() {
	return gulp.src('styles/styles.css') // Берем источник
		.pipe(cssnano())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(paths.styles.dest)) // Выгружаем результат
};

function minifyHtml() {
  return gulp.src('*.html') // указываем пути к файлам .html
  .pipe(htmlmin({
    collapseWhitespace: true, // удаляем все переносы
    removeComments: true // удаляем все комментарии
  }))
	.pipe(gulp.dest('public/')) // оптимизированные файлы .html переносим на продакшен
	.pipe(browserSync.reload({stream: true})) // Обновляем страницу при изменении HTML разметки
};

//tinypng api key WfKW8hdYnBwNbXK2vCS7cT0WnXxNrGTt

function tinyPngJpg() {
	gulp.src(paths.img.src) // Берем источник
			.pipe(tinymin('WfKW8hdYnBwNbXK2vCS7cT0WnXxNrGTt')) //api key для ресурса tinypng юзать не более 500 раз в месяц
			.pipe(gulp.dest(paths.img.dest)) // Выгружаем результат
};

function images() {
return gulp.src(paths.img.src) // Берем источник
	.pipe(imageMin([
		imageMin.optipng({optimizationLevel: typeOfCompression}),
		imageMin.jpegtran({progressive: true}),
		imageMin.svgo({
			plugins: [
						{removeViewBox: true},
						{cleanupIDs: false}
					]
			})
	]))
	.pipe(gulp.dest(paths.img.dest)) // Выгружаем результат
};

function webpConvert() {
return gulp.src(paths.img.src) // Берем источник
	.pipe(webp({quality: 95,
							lossless: false}))
	.pipe(gulp.dest(paths.img.dest)) // Выгружаем результат
};

function browserSyncRun() { // Создаем таск browser-sync
	browserSync.init({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './' // Директория для сервера
		},
		port: 8080,
		open: true,
		notify: false // Отключаем уведомления
	});
};

function watch() {
	gulp.watch('styles/**/*.scss', gulp.parallel(sassConvertInCss)) // Наблюдение за sass файлами и конвертация
	gulp.watch('*.html', gulp.parallel(minifyHtml)) // Наблюдение за HTML файлами и конвертация
};

exports.sassConvertInCss = sassConvertInCss;
exports.cssmin = cssmin;
exports.minifyHtml = minifyHtml;
exports.browserSyncRun = browserSyncRun;
exports.tinyPngJpg = tinyPngJpg;
exports.images = images;
exports.webpConvert = webpConvert;
exports.watch = watch;
exports.default = gulp.parallel(sassConvertInCss, cssmin, browserSyncRun, watch);




