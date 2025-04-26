import { execSync } from 'node:child_process';

// Create a virtual environment and install Django
console.log('Creating virtual environment and installing Django...');
try {
  execSync('python -m venv venv');
  const activateCmd = process.platform === 'win32' 
    ? '.\\venv\\Scripts\\activate' 
    : 'source venv/bin/activate';
  
  // Install required packages
  const installCmd = `${activateCmd} && pip install django djangorestframework django-cors-headers pillow`;
  execSync(installCmd, { shell: true });
  
  // Start a new Django project
  execSync(`${activateCmd} && django-admin startproject hackathon_valley_backend`, { shell: true });
  
  // Create apps
  const apps = ['users', 'teams', 'projects', 'notifications', 'resources', 'schedule'];
  apps.forEach(app => {
    execSync(`${activateCmd} && cd hackathon_valley_backend && python manage.py startapp ${app}`, { shell: true });
  });
  
  console.log('Django project setup complete!');
  console.log('\nProject structure created:');
  console.log('- hackathon_valley_backend/ (Django project)');
  apps.forEach(app => {
    console.log(`  - ${app}/ (Django app)`);
  });
  
} catch (error) {
  console.error('Error setting up Django project:', error.message);
}
