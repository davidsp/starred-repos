exports.config =
  
  framework: 'backbone'
  
  paths:
    public: 'public'
  
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(vendor)/
        'test/javascripts/test.js': /^test[\\/](?!vendor)/
        'test/javascripts/test-vendor.js': /^test[\\/](?=vendor)/
      order:
        before: [
          'vendor/scripts/jquery-1.9.1.js',
          'vendor/scripts/underscore-1.4.4.js',
          'vendor/scripts/backbone-1.0.0.js'
        ],
        after: [
          # popover requires tooltip
          'vendor/scripts/bootstrap/bootstrap-tooltip.js'
          'vendor/scripts/bootstrap/bootstrap-popover.js'
          
          'test/vendor/scripts/test-helper.js'
        ]
         
    stylesheets:
      defaultExtension: 'less'
      joinTo: 
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      
    templates:
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js'
