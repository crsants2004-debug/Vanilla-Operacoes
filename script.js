const prices={Capuz:14580,"Coletes":14580,Kit:20000,Outros:10000};
function money(n){return n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
function calcVenda(){const item=document.getElementById('item').value, qtd=+document.getElementById('qtd').value||1, unit=prices[item]||0,total=unit*qtd,par=document.getElementById('parceria').value==='Com parceria';document.getElementById('vendaOut').innerHTML=`💰 Unitário: ${money(unit)}<br>📊 Quantidade: ${qtd}<br>💰 Total: ${money(total)}<br>👤 Operador 30%: ${money(total*.3)}<br>🏢 FARC 70%: ${money(total*.7)}`;addHistory('Venda',`📦 Item: ${item}`,`📊 Quantidade: ${qtd}`,`💰 Total: ${money(total)}`)}
function calcLavagem(){let v=+lavValor.value||0,q=+lavQtd.value||1;lavOut.innerHTML=`💰 Unitário: ${money(v)}<br>📊 Quantidade: ${q}<br>💰 Total: ${money(v*q)}`}
function calcDesmanche(){let v=+desValor.value||0,q=+desQtd.value||1;desOut.innerHTML=`💰 Unitário: ${money(v)}<br>📊 Quantidade: ${q}<br>💰 Total: ${money(v*q)}`}
function consulta(){let n=farc.value.trim();parOut.textContent=n?`🔎 Consulta registrada para: ${n}.`:'Digite o nome da FARC para consultar.'}
function addHistory(...lines){let d=document.createElement('div');d.className='historyItem';d.innerHTML='<b>Venda</b><small>'+new Date().toISOString()+'</small>'+lines.map(x=>`<span>${x}</span>`).join('');historyList.prepend(d)}
function refreshHistory(){alert('Histórico atualizado.')}
function showTab(id,btn){document.querySelectorAll('.tab').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));btn.classList.add('active')}
