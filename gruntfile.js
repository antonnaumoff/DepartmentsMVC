module.exports = function(grunt) {

    // 1. Общая конфигурация
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройки для склеивания файлов
            dist: {
                src: [
                    'src/main/webapp/scripts/*.js', // Все js-файлы в директории libs
                    'src/main/webapp/js/socket.js'  // Отдельный файл
                ],
                dest: 'src/main/webapp/js/build/production.js'
            }
        }

    });

    // 3. Сообщаем, какие плагины мы собираемся использовать
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Определяем задачу по умолчанию, которая будет выполняться при запуске команды grunt в терминале.
    grunt.registerTask('default', ['concat']);

};/**
 * Created by antonnaumoff on 22.07.15.
 */
