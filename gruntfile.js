module.exports = function (grunt) {

  let CLI_FILES = [
    "src/cliEntry.ts",
    "src/efflist.ts",
    "src/easyphraseOutput.ts",
    "src/easyphraseCore.ts",
    "src/cliRun.ts"
  ]

  let WEB_FILES = [
    "src/efflist.ts",
    "src/easyphraseWebInterface.ts",
    "src/easyphraseOutput.ts",
    "src/easyphraseCore.ts"
  ]

  let LIC_FILES = "license.txt";

  let CLI_ENTRY = "cli/easyphrase.js"
  let WEB_ENTRY = "dist/easyphrase.js"
  let WEB_MIN = 'dist/easyphrase.min.js'

  grunt.initConfig({
    ts: {
      cli: {
        files: [{
          src: CLI_FILES,
          dest: CLI_ENTRY
        }]
      },
      web: {
        files: [{
          src: WEB_FILES,
          dest: WEB_ENTRY
        }]
      }
    },
    concat: {
      web: {
        src: [
          LIC_FILES,
          WEB_ENTRY
        ],
        dest: WEB_ENTRY
      },
      cli: {
        src: [
          LIC_FILES,
          CLI_ENTRY
        ],
        dest: CLI_ENTRY
      }
    },
    uglify: {
      web: {
        files: [{
          src: WEB_ENTRY,
          dest: WEB_MIN
        }]
      }
    }
  });

  // Load the tasks we need
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register the run order
  grunt.registerTask('default', [
    "ts:web",
    "concat:web",
    "ts:cli",
    "concat:cli",
    "uglify:web"
  ]);

};