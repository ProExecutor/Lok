function UnityProgress(gameInstance, progress) {
  // Check if the Module is defined
  if (!gameInstance.Module)
    return;

  // Create logo element if it doesn't exist
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + (gameInstance.Module.splashScreenStyle || "");
    gameInstance.container.appendChild(gameInstance.logo);
  }

  // Create progress bar elements if they don't exist
  if (!gameInstance.progress) {    
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + (gameInstance.Module.splashScreenStyle || "");
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
  }

  // Update progress bar widths
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  // Hide logo and progress bar when loading is complete
  if (progress == 1) {
    gameInstance.logo.style.display = 'none';
    gameInstance.progress.style.display = 'none';
  }
}
