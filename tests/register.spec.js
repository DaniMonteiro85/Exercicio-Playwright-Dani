// @ts-check
import { test, expect } from '@playwright/test';

test('CT-FE-001: Fluxo Completo de Registro', async ({ page }) => {
  await page.goto('http://localhost:3000/registro.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Registro - Biblioteca");

  await page.getByRole('textbox', { name: 'Nome:' }).fill("Carlos Oliveira");
  await page.getByRole('textbox', { name: 'Email:' }).fill("carlos@teste.com");
  await page.getByRole('textbox', { name: 'Senha:', exact: true }).fill("123456");
  await page.getByRole('textbox', { name: 'Confirmar Senha:' }).fill("123456");
  await page.getByRole('button', { name: 'Registrar' }).click();


  await page.getByRole('link', { name: 'Faça login' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill("carlos@teste.com");
  await page.getByRole('textbox', { name: 'Senha:' }).fill("123456");
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page).toHaveURL("http://localhost:3000/dashboard.html");

  
});


test('CT-FE-002: Validação de Senhas Não Correspondentes', async ({ page }) => {
  await page.goto('http://localhost:3000/registro.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Registro - Biblioteca");

  await page.getByRole('textbox', { name: 'Nome:' }).fill("Carlos Oliveira");
  await page.getByRole('textbox', { name: 'Email:' }).fill("carlos1@teste.com");
  await page.getByRole('textbox', { name: 'Senha:', exact: true }).fill("123456");
  await page.getByRole('textbox', { name: 'Confirmar Senha:' }).fill("1234567");
  await page.getByRole('button', { name: 'Registrar' }).click();
 await expect(page).toHaveURL("http://localhost:3000/registro.html");


});


  test('CT-FE-003: Adicionar Novo Livro', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');
    

  await page.getByRole('textbox', { name: 'Email:' }).fill("admin@biblioteca.com");
  await page.getByRole('textbox', { name: 'Senha:' }).fill("123456");
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByRole('link', { name: 'Gerenciar Livros' }).click();
  await page.getByRole('textbox', { name: 'Nome do Livro:' }).fill("Senhor dos Anéis");
  await page.getByRole('textbox', { name: 'Autor:' }).fill("Danielle");
  await page.getByRole('spinbutton', { name: 'Número de Páginas:' }).fill("200");
  await page.getByRole('textbox', { name: 'Descrição:' }).fill("Fantasia");
  await page.getByRole('button', { name: 'Adicionar Livro' }).click();
  
  
  await expect(page).toHaveURL("http://localhost:3000/dashboard.html");

  
 
 // await expect(page).toHaveURL("http://localhost:3000/registro.html");


});



test('CT-FE-011: Adicionar Livro aos Favoritos', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');
    

  await page.getByRole('textbox', { name: 'Email:' }).fill("admin@biblioteca.com");
  await page.getByRole('textbox', { name: 'Senha:' }).fill("123456");
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByText('Harry Potter Autor: J.K.').click();
  await page.getByRole('button', { name: '🤍 Adicionar aos Favoritos' }).click();
  
  await expect(page).toHaveURL("http://localhost:3000/dashboard.html");

  
 
 // await expect(page).toHaveURL("http://localhost:3000/registro.html");


});

  


