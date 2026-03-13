document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {
    oso: [
{ tipo: "video", src: "media/videos/crystalknight_-1243646775828729856-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2027641877009240100-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028251607800930714-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028689244466635184-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028689518258176149-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028689583244759360-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028878957936787829-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028919138983305412-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028941935352701398-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028949244485251392-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028970879372145101-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2028970917028569412-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029212654753976752-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029285387248578984-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029300894936739891-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029351189792391259-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029362888771613141-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029365328317210974-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029379055854727473-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029389781482819723-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029432199934554261-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029432231567954182-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029432264770101747-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029469147302613443-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029570765587181714-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029645978723066367-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029688279642075508-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029751523396260311-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2029770244785344635-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030052661886673243-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030055896147984442-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030068557187371285-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030082710337720785-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030113572806689178-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030144110691074199-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030202873263329759-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030297839436198104-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030297872550309968-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030404635731571193-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030440550587883881-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030486829552538093-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030541709617119297-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030570624368648425-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030570687794979224-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030593373946470726-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030593440879083646-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030656014249345118-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030665014164545548-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030674447867220446-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030679946402672694-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030693727941849345-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030697251157275099-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030733000317509736-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030742560478490812-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030788871735083315-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030792424201617686-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030847199437787473-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030874681801109967-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030874728328552743-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2030890825622675514-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031092959442080126-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031179594045292987-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031179624076435478-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031261521125290356-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031272047599403488-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031301274465976517-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031301374143553841-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031362406991942140-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031367305238642974-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031367334703583277-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031378943811477540-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031460865929527298-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031460895138660636-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031752108022567011-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2031763235943190685-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2032041293568684324-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2032426011749401011-01.mp4" },
{ tipo: "video", src: "media/videos/crystalknight_-2032488628853571812-01.mp4" }







  


  
 ] };

  /* ===== ESTADO ===== */
let categoriaActual = null;
let primeraVez = true;
let zIndex = 10;
let popupsActivos = []; 

  /* ===== ELEMENTOS ===== */
  const selector = document.getElementById("selector");
  const main = document.getElementById("main");
  const btn = document.getElementById("openBtn");
  const popupZone = document.getElementById("popupZone");
  const bgVideo = document.getElementById("bgVideo");
  const bgWrap = document.getElementById("videoBackground");
  const bgAudio = document.getElementById("bgAudio");

  /* ===== SELECCIÓN ===== */
document.querySelectorAll(".selector-btn").forEach(b => {
  b.addEventListener("click", () => {

    categoriaActual = b.dataset.cat;

    /* 🔓 DESBLOQUEO GLOBAL DE MEDIA (MÓVIL) */
    bgVideo.src = "media/videos/fondo.mp4"; // LOCAL
    bgVideo.muted = true;
    bgVideo.play().catch(()=>{});

    bgAudio.src = "media/audio/fondo.mp3";
    bgAudio.muted = true;
    bgAudio.play().catch(()=>{});

    /* UI */
    selector.style.display = "none";
    main.style.display = "flex";
  });
});


  /* ===== POPUPS ===== */
btn.addEventListener("click", () => {

    if (!categoriaActual || !libreria[categoriaActual]) return;

    if (primeraVez) {
        bgWrap.style.opacity = "1";
        bgVideo.muted = false;
        bgAudio.muted = false;
        // En móviles, play() debe llamarse inmediatamente en el click
        bgVideo.play().catch(e => console.log("Error video:", e));
        bgAudio.play().catch(e => console.log("Error audio:", e));
        btn.style.opacity = "0.5"; 
        primeraVez = false;
    }
  if (popupsActivos.length >= 4) {
        const viejo = popupsActivos.shift(); // Saca el primero de la lista (el más antiguo)
        if (viejo) viejo.remove(); // Lo elimina del DOM
    }
    const lista = libreria[categoriaActual];
    const elegido = lista[Math.floor(Math.random() * lista.length)];

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.zIndex = ++zIndex;

    // --- CÁLCULO DE POSICIÓN RESPONSIVO ---
const isMobile = window.innerWidth < 600;

const popupWidth = isMobile
  ? window.innerWidth * 0.51
  : 380;

const popupHeight = isMobile
  ? window.innerHeight * 0.39
  : 560;

/* Aplicar tamaño REAL al popup */
popup.style.width = popupWidth + "px";
popup.style.height = popupHeight + "px";


    let x = Math.random() * (window.innerWidth - popupWidth);
    let y = Math.random() * (window.innerHeight - popupHeight);

    // Evitar que aparezca fuera de los bordes
    x = Math.max(10, Math.min(x, window.innerWidth - popupWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - popupHeight - 10));

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.innerHTML = `<span class="close">&times;</span>`;

    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = false; //Los popups suelen requerir estar muteados para autoplay infinito
    video.playsInline = true; // OBLIGATORIO PARA IOS
    video.setAttribute("webkit-playsinline", "true"); // Extra para versiones viejas de Safari

    video.src = elegido.src; 
    
    popup.appendChild(video);

    popup.querySelector(".close").onclick = e => {
        e.stopPropagation();
popupsActivos = popupsActivos.filter(p => p !== popup);
        popup.remove();
    };

    popupZone.appendChild(popup);
popupsActivos.push(popup);
});





});













