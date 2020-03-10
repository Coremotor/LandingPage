var gulp      = require('gulp'), // Подключаем Gulp
		sass        = require('gulp-sass'), //Подключаем Sass пакет,
		browserSync = require('browser-sync').create(), // Подключаем Browser Sync
		autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
		cssnano = require('gulp-cssnano');

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('./styles/styles.scss') // Берем источник
		.pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass и логируем ошибки
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('./styles')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('cssmin', function() {
	return gulp.src('./styles/styles.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./styles/cssmin'));
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync.init({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './' // Директория для сервера
		},
		port: 8080,
		open: true,
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', function() {
	gulp.watch('./styles/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('sass', 'cssmin', 'browser-sync', 'watch'));
