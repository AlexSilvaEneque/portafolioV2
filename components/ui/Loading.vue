<template>
    <div class="spinner"></div>
</template>

<style scoped>
.spinner {
   width: 56px;
   height: 56px;
   display: grid;
   color: #4CBBA1;
   background: linear-gradient(currentColor 0 0) center/100% 3.4px,
          linear-gradient(currentColor 0 0) center/3.4px 100%;
   background-repeat: no-repeat;
   animation: spinner-slq5ph 1.5s infinite;
}

.spinner::before,
.spinner::after {
   content: "";
   grid-area: 1/1;
   background: repeating-conic-gradient(#0000 0 35deg,currentColor 0 90deg);
   mask: radial-gradient(farthest-side,#0000 calc(100% - 3.4px),#000 0);
   border-radius: 50%;
}

.spinner::after {
   margin: 20%;
}

@keyframes spinner-slq5ph {
   100% {
      transform: rotate(1turn);
   }
}
</style>