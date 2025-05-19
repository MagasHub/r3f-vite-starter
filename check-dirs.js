// Adicione este arquivo como "check-dirs.js" na raiz do projeto

const fs = require('fs');
const path = require('path');

// Verificar estrutura de diretórios e nomes de arquivos
console.log('Verificando estrutura de diretórios...');

// Caminho para o diretório de componentes 
const componentsDir = path.join(__dirname, 'src', 'components');

try {
  // Verificar se o diretório existe
  if (fs.existsSync(componentsDir)) {
    console.log(`Diretório 'components' encontrado: ${componentsDir}`);
    
    // Listar arquivos no diretório
    const files = fs.readdirSync(componentsDir);
    console.log(`Arquivos em 'components': ${files.join(', ')}`);
    
    // Verificar especificamente o SideMenu
    const sideMenuVariations = [
      'SideMenu.jsx', 'SideMenu.js', 'sideMenu.jsx', 'sideMenu.js',
      'Sidemenu.jsx', 'Sidemenu.js', 'sidemenu.jsx', 'sidemenu.js'
    ];
    
    const sideMenuDir = path.join(componentsDir, 'SideMenu');
    if (fs.existsSync(sideMenuDir) && fs.statSync(sideMenuDir).isDirectory()) {
      console.log(`'SideMenu' é um diretório: ${sideMenuDir}`);
      const subFiles = fs.readdirSync(sideMenuDir);
      console.log(`Arquivos em 'SideMenu': ${subFiles.join(', ')}`);
    }
    
    for (const name of sideMenuVariations) {
      const filePath = path.join(componentsDir, name);
      if (fs.existsSync(filePath)) {
        console.log(`Arquivo encontrado: ${name}`);
      }
    }
  } else {
    console.log(`Diretório 'src/components' não encontrado!`);
    
    // Verificar se existe um diretório Components com C maiúsculo
    const componentsUpperDir = path.join(__dirname, 'src', 'Components');
    if (fs.existsSync(componentsUpperDir)) {
      console.log(`Diretório 'Components' com C maiúsculo encontrado: ${componentsUpperDir}`);
      const files = fs.readdirSync(componentsUpperDir);
      console.log(`Arquivos em 'Components': ${files.join(', ')}`);
    }
  }
} catch (error) {
  console.error(`Erro ao verificar diretórios: ${error.message}`);
}

// Verificar App.jsx e suas importações
try {
  const appPath = path.join(__dirname, 'src', 'App.jsx');
  if (fs.existsSync(appPath)) {
    console.log(`Arquivo App.jsx encontrado: ${appPath}`);
    const appContent = fs.readFileSync(appPath, 'utf8');
    
    // Procurar linhas de importação relacionadas ao SideMenu
    const importLines = appContent.split('\n').filter(line => 
      line.includes('import') && line.includes('SideMenu')
    );
    
    if (importLines.length > 0) {
      console.log('Importações do SideMenu encontradas:');
      importLines.forEach(line => console.log(`  ${line.trim()}`));
    } else {
      console.log('Nenhuma importação do SideMenu encontrada em App.jsx');
    }
  } else {
    console.log(`Arquivo 'src/App.jsx' não encontrado!`);
  }
} catch (error) {
  console.error(`Erro ao verificar App.jsx: ${error.message}`);
}

console.log('Verificação concluída!');