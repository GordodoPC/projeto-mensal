// JavaScript para manipulação de elementos ou interação
document.addEventListener("DOMContentLoaded", function () {
    var embedContainer = document.getElementById('embed-container');
    
    var iframeElement = document.createElement('div');
    iframeElement.style.position = 'relative';
    iframeElement.style.width = '100%';
    iframeElement.style.height = '0';
    iframeElement.style.paddingTop = '100.0000%';
    iframeElement.style.paddingBottom = '0';
    iframeElement.style.boxShadow = '0 2px 8px 0 rgba(63,69,81,0.16)';
    iframeElement.style.marginTop = '1.6em';
    iframeElement.style.marginBottom = '0.9em';
    iframeElement.style.overflow = 'hidden';
    iframeElement.style.borderRadius = '8px';
    iframeElement.style.willChange = 'transform';
    
    var iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.style.position = 'absolute';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.border = 'none';
    iframe.style.padding = '0';
    iframe.style.margin = '0';
    iframe.setAttribute('src', 'https://www.canva.com/design/DAGPFRyDDMU/28VUlllxFl9Rn3vlL8cXGg/view?embed');
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.setAttribute('allow', 'fullscreen');
    
    iframeElement.appendChild(iframe);
    embedContainer.appendChild(iframeElement);


});

document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/41984556982'; 
});
