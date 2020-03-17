"use strict";

// Задаем стандартные пути
const paths = {
	styles: {
		src: 'styles/styles.scss',
		dest: 'public/styles'
	},
	scripts: {
		src: 'scripts/*.js',
		dest: 'public/scripts'
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
const webp = require("gulp-webp"); // Подключаем библиотеку для конвертации картинок в формат webP
const concat = require('gulp-concat'); //Подключаем библиотеку для сборки js файлов в один
const uglify = require('gulp-uglify-es').default; //Подключаем библиотеку для минификации js файлов
const del = require('del'); //Подключаем библиотеку для удаления файлов
const runSequence = require('gulp4-run-sequence'); //Подключаем библиотеку для возможномти запуска тасков друг за другом


// Блок работы со стилями
function styles(){
	return gulp.src(paths.styles.src) // Берем источник
		.pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass и логируем ошибки
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('./styles')) // Выгружаем результат
		.pipe(browserSync.stream()) // Обновляем страницу при изменении CSS стилей
		.pipe(cssnano()) //Минифицируем CSS файл
		.pipe(rename({suffix: ".min"})) //Переименовываем минифицированный CSS файл
		.pipe(gulp.dest(paths.styles.dest)) // Выгружаем результат в продакшн
		.pipe(browserSync.stream()) // Обновляем страницу при изменении CSS стилей
}
//Конец блока работы со стилями

//Блок работы с HTML
function minifyHtml() {
  return gulp.src('*.html') // указываем пути к файлам .html
  .pipe(htmlmin({
    collapseWhitespace: true, // удаляем все переносы
    removeComments: true // удаляем все комментарии
  }))
	.pipe(gulp.dest('public/')) // оптимизированные файлы .html переносим на продакшен
	.pipe(browserSync.stream()) // Обновляем страницу при изменении HTML разметки
}
//Конец блока работы с HTML

//Блок работы с изображениями

//tinypng api key WfKW8hdYnBwNbXK2vCS7cT0WnXxNrGTt
function tinyPngJpg() {
	gulp.src(paths.img.src) // Берем источник
			.pipe(tinymin('WfKW8hdYnBwNbXK2vCS7cT0WnXxNrGTt')) //api key для ресурса tinypng юзать не более 500 раз в месяц
			.pipe(gulp.dest(paths.img.dest)) // Выгружаем результат
}

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
}

function webpConvert() {
return gulp.src(paths.img.src) // Берем источник
	.pipe(webp({quality: 95,
							lossless: false}))
	.pipe(gulp.dest(paths.img.dest)) // Выгружаем результат
}
//Конец блока работы с изображениями

//Блок работы с JS
function delJsAllInOneFile() {
	return del('scripts/all.js')
}

function jsAllInOneFile() {
	return gulp.src(paths.scripts.src)
		.pipe(concat('all.js'))
		.pipe(gulp.dest('scripts'))
}

function jsCompress() {
	return gulp.src('scripts/all.js')
		.pipe(rename({suffix: ".min"}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream())
}

function scripts(done) {
	runSequence(
		'delJsAllInOneFile',
		'jsAllInOneFile',
		'jsCompress',
		done
	);
}
//Конец блока работы с JS

// Создаем таск browser-sync
function browserSyncRun() {
	browserSync.init({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './' // Директория для сервера
		},
		port: 8080,
		open: true,
		notify: false // Отключаем уведомления
	});
}

function watch() {
	gulp.watch('styles/*.scss', gulp.parallel(styles)) // Наблюдение за sass файлами и конвертация
	gulp.watch('*.html', gulp.parallel(minifyHtml)) // Наблюдение за HTML файлами и конвертация
	gulp.watch(['scripts/*.js','!scripts/all.js'], gulp.parallel(scripts)) // Наблюдение за JS файлами и конвертация
}

function build(done){
	runSequence(
		'styles',
		'scripts',
		'minifyHtml',
		done
	);
}

exports.styles = styles;
exports.minifyHtml = minifyHtml;
exports.browserSyncRun = browserSyncRun;
exports.tinyPngJpg = tinyPngJpg;
exports.images = images;
exports.webpConvert = webpConvert;
exports.jsAllInOneFile = jsAllInOneFile;
exports.delJsAllInOneFile = delJsAllInOneFile;
exports.scripts = scripts;
exports.jsCompress = jsCompress;
exports.watch = watch;
exports.build = build;
exports.default = gulp.parallel(browserSyncRun, watch);




