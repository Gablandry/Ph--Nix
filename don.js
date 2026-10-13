function copyInterac() {
  var email = 'phenixactioncitoyenne@gmail.com';
  var btn = document.getElementById('copy-btn');
  var txt = btn.querySelector('.act-txt');
  var msg = document.getElementById('copied-msg');
  var libelle = txt.textContent;

  // Succes et echec doivent se distinguer : annoncer « copie » alors que le
  // presse-papier a refuse enverrait le donateur coller du vide.
  function fin(ok) {
    txt.textContent = ok ? 'Copié' : 'Copiez à la main';
    btn.classList.toggle('ok', ok);
    msg.textContent = ok ? '✓ Adresse copiée. Collez-la dans votre virement'
                         : "La copie automatique a échoué. Sélectionnez l'adresse ci-dessus.";
    msg.classList.toggle('err', !ok);
    msg.classList.add('show');
    setTimeout(function () {
      txt.textContent = libelle;
      btn.classList.remove('ok');
      msg.classList.remove('show', 'err');
    }, 3500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(function () { fin(true); }, function () { fin(false); });
    return;
  }
  var t = document.createElement('textarea');
  t.value = email; document.body.appendChild(t); t.select();
  var ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(t);
  fin(ok);
}
