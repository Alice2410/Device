import CategoryItem from '../Categorie/CategoryLink'
import styles from './Categories.module.scss'

const Categories = () => {
  const categorieItems = [{
    link: 'vr',
    title: 'Виртуальная реальность',
    icon: `<svg class="img-1" aria-hidden="true" focusable="false"  width="97" height="55" viewBox="0 0 97 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M84.1314 32.639V20.003C84.1314 18.694 85.1764 17.633 86.4664 17.633L94.7924 19.214V11.02C94.7924 8.66497 93.0844 7.58897 90.5904 6.75497L67.4034 0.174968C69.0194 1.56597 69.2924 2.21497 69.2924 4.57097V49.78C69.2924 52.136 68.8424 53.846 67.3254 54.99L90.5904 47.925C92.9914 47.092 94.7924 43.709 94.7924 41.353V33.44L86.4664 35.007C85.1764 35.009 84.1314 33.947 84.1314 32.639Z" fill="#363636"/>
    <path d="M95.1294 20.979L87.5314 19.535C86.5234 19.535 85.7074 20.364 85.7074 21.386V31.254C85.7074 32.277 86.5234 33.106 87.5314 33.106L95.1294 31.675C96.2834 31.256 96.9534 30.846 96.9534 29.823V22.83C96.9534 21.808 96.1874 21.323 95.1294 20.979Z" fill="#363636"/>
    <path d="M67.1704 4.48297C67.1704 -0.597033 62.9384 0.0239677 62.9384 0.0239677C62.9384 0.0239677 5.83241 4.73797 2.83841 5.14497C-0.155585 5.55197 0.00141458 9.53197 0.00141458 9.53197C0.00141458 9.53197 0.000414578 42.069 0.000414578 45.812C0.000414578 49.555 2.59941 49.565 2.59941 49.565L19.0764 50.968L27.2124 39.3C27.2124 39.3 28.3214 37.472 29.7174 37.472C31.1144 37.472 32.1494 39.333 32.1494 39.333L41.2104 52.854C41.2104 52.854 60.1054 54.763 63.7314 54.763C67.3574 54.762 67.1704 49.739 67.1704 49.739C67.1704 49.739 67.1704 9.56297 67.1704 4.48297ZM12.9824 37.192C9.28442 37.192 6.28641 32.591 6.28641 26.917C6.28641 21.243 9.28442 16.642 12.9824 16.642C16.6804 16.642 19.6784 21.243 19.6784 26.917C19.6784 32.591 16.6804 37.192 12.9824 37.192ZM49.1404 38.618C44.4784 38.618 40.6994 33.379 40.6994 26.917C40.6994 20.454 44.4794 15.215 49.1404 15.215C53.8024 15.215 57.5824 20.454 57.5824 26.917C57.5824 33.379 53.8024 38.618 49.1404 38.618Z" fill="#363636"/>
    </svg>`
  },{
    link: 'monopods',
    title: 'Моноподы для селфи',
    icon: ` <svg class="img-2"  aria-hidden="true" focusable="false" width="86" height="117" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M82.82 4.01H3.33A3.19 3.19 0 0 0 .14 7.2V53.6a3.19 3.19 0 0 0 3.19 3.2h79.5A3.19 3.19 0 0 0 86 53.6V7.2A3.19 3.19 0 0 0 82.82 4ZM8.4 37.24h-.22a3.19 3.19 0 0 1-3.2-3.2v-7.28a3.19 3.19 0 0 1 3.2-3.18h.22v13.66ZM69.62 52.4H13.34v-44h56.28v44Zm8.78-17.86a4.15 4.15 0 1 1 0-8.29 4.15 4.15 0 0 1 0 8.3ZM54.65 0H31.5v2.76h23.15V0ZM46.6 64.86V61.9h8.05v-2.76H31.5v2.76h8.04v35.24a6.07 6.07 0 0 0-3.63 5.56V117h14.33v-14.3c0-2.5-1.5-4.63-3.63-5.56v-28h4.8l5.04 1.22v-6.71l-5.05 1.21h-4.8Z" fill="#363636"/></svg>`
  },{
    link: 'cameras',
    title: 'Экшн-камеры',
    icon: `<svg class="img-3" aria-hidden="true" focusable="false" width="71" height="87" viewBox="0 0 71 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.349 1.49C53.349 0.754 52.771 0 52.038 0H9.053C8.32 0 7.672 0.754 7.672 1.49V5.012H53.348L53.349 1.49Z" fill="#363636"/>
    <path d="M54.202 81.809H44.605V71.426H37.647V73.933H18.774C18.237 72.679 17.017 71.785 15.593 71.785H3.559C1.642 71.784 0 73.387 0 75.311V78.329C0 80.253 1.642 81.809 3.559 81.809H15.594C17.105 81.809 18.386 80.913 18.863 79.483H37.648V81.809H28.13C27.597 81.809 27.12 82.246 27.12 82.781V85.953C27.12 86.488 27.598 87.001 28.13 87.001H54.202C54.735 87.001 55.132 86.488 55.132 85.953V82.78C55.132 82.245 54.735 81.809 54.202 81.809Z" fill="#363636"/>
    <path d="M60.666 12.39C59.805 9.453 57.099 7.34 53.895 7.34H7.148C3.25 7.34 0 10.449 0 14.361V61.261C0 65.173 3.25 68.382 7.148 68.382H53.895C57.793 68.382 61.021 65.173 61.021 61.261V50.915C67.087 46.711 71.022 39.704 71.022 31.751C71.021 23.672 66.89 16.57 60.666 12.39ZM12.238 62.151C8.979 62.151 6.337 59.501 6.337 56.23C6.337 52.96 8.979 50.308 12.238 50.308C15.497 50.308 18.14 52.96 18.14 56.23C18.14 59.501 15.497 62.151 12.238 62.151ZM18.199 29.546C18.199 30.332 17.564 30.968 16.781 30.968H7.841C7.058 30.968 6.423 30.331 6.423 29.546V15.386C6.423 14.6 7.058 13.963 7.841 13.963H16.78C17.563 13.963 18.198 14.6 18.198 15.386L18.199 29.546ZM47.762 51.858C36.686 51.858 27.705 42.848 27.705 31.735C27.705 20.622 36.685 11.611 47.762 11.611C58.839 11.611 67.82 20.621 67.82 31.735C67.82 42.849 58.839 51.858 47.762 51.858Z" fill="#363636"/>
    <path d="M47.762 43.964C54.4932 43.964 59.95 38.4889 59.95 31.735C59.95 24.9811 54.4932 19.506 47.762 19.506C41.0308 19.506 35.574 24.9811 35.574 31.735C35.574 38.4889 41.0308 43.964 47.762 43.964Z" fill="#363636"/>
    <path d="M31.562 33.171C32.3545 33.171 32.997 32.5285 32.997 31.736C32.997 30.9435 32.3545 30.301 31.562 30.301C30.7695 30.301 30.127 30.9435 30.127 31.736C30.127 32.5285 30.7695 33.171 31.562 33.171Z" fill="#363636"/>
    <path d="M63.963 33.171C64.7555 33.171 65.398 32.5285 65.398 31.736C65.398 30.9435 64.7555 30.301 63.963 30.301C63.1705 30.301 62.528 30.9435 62.528 31.736C62.528 32.5285 63.1705 33.171 63.963 33.171Z" fill="#363636"/>
    <path d="M39.109 19.429C39.9015 19.429 40.544 18.7865 40.544 17.994C40.544 17.2015 39.9015 16.559 39.109 16.559C38.3165 16.559 37.674 17.2015 37.674 17.994C37.674 18.7865 38.3165 19.429 39.109 19.429Z" fill="#363636"/>
    <path d="M56.415 46.912C57.2048 46.912 57.845 46.2691 57.845 45.476C57.845 44.6829 57.2048 44.04 56.415 44.04C55.6252 44.04 54.985 44.6829 54.985 45.476C54.985 46.2691 55.6252 46.912 56.415 46.912Z" fill="#363636"/>
    <path d="M55.697 19C56.4895 19 57.132 18.3575 57.132 17.565C57.132 16.7725 56.4895 16.13 55.697 16.13C54.9045 16.13 54.262 16.7725 54.262 17.565C54.262 18.3575 54.9045 19 55.697 19Z" fill="#363636"/>
    <path d="M39.828 47.341C40.6205 47.341 41.263 46.6985 41.263 45.906C41.263 45.1135 40.6205 44.471 39.828 44.471C39.0355 44.471 38.393 45.1135 38.393 45.906C38.393 46.6985 39.0355 47.341 39.828 47.341Z" fill="#363636"/>
    </svg>`
  },{
    link: 'braslets',
    title: 'Фитнес-браслеты',
    icon: `<svg class="img-4" aria-hidden="true" focusable="false" width="107" height="65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.97 4.07a10.4 10.4 0 0 1 1.2 4.82V30c0 4.62-3.09 8.53-7.24 9.9-1.33 4-3.78 7.86-8.05 10.44-8.68 5.23-31.12 4.83-31.2 4.83-.08 0-22.51.4-31.19-4.83a18.73 18.73 0 0 1-8.04-10.28 10.5 10.5 0 0 1-7.76-10.06V8.9c0-1.69.43-3.28 1.14-4.69C4.17 5.1 0 6.92 0 10.43v29.99c0 10.25 11.84 24.43 53.66 24.43 41.82 0 53.65-14.18 53.65-24.43V10.43c0-3.68-4.57-5.49-8.34-6.36Z" fill="#363636"/><path d="M20.56 38.46h65.52c5.57 0 10.08-4.51 10.08-10.08V9.93c0-5.56-4.51-10.07-10.08-10.07H20.56A10.08 10.08 0 0 0 10.5 9.93v18.45c0 5.57 4.5 10.08 10.07 10.08Zm63.13-29a1.57 1.57 0 1 1 0 3.15 1.57 1.57 0 0 1 0-3.14Zm0 4.05a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 4.04a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.82a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM79.66 9.47a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 15.94a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM75.62 9.47a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.82a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM67.96 9.47a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 8.08a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.88a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.98a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM63.94 9.47a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 8.08a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 7.86a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM59.89 9.47a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 7.86a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm-8.3-15.94a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 4.04a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.88a1.57 1.57 0 1 1 .01 3.13 1.57 1.57 0 0 1 0-3.13Zm0 3.98a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm-4.03-11.9a1.57 1.57 0 1 1 0 3.13 1.57 1.57 0 0 1 0-3.13Zm-8.5-.21a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.15Zm0 4.03a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm-4.04-8.08a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.13Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm-4.26-8.08a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.13Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14ZM26.3 9.25a1.57 1.57 0 1 1 0 3.15 1.57 1.57 0 0 1 0-3.15Zm0 4.04a1.57 1.57 0 1 1 0 3.15 1.57 1.57 0 0 1 0-3.15Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Zm0 4.04a1.57 1.57 0 1 1 0 3.15 1.57 1.57 0 0 1 0-3.15Zm-4.04-8.08a1.57 1.57 0 1 1 0 3.15 1.57 1.57 0 0 1 0-3.15Zm0 4.04a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 0 1 0-3.14Z" fill="#363636"/></svg>`
  },{
    link: 'watches',
    title: 'Умные часы',
    icon: `<svg class="img-5" aria-hidden="true" focusable="false" width="56" height="98" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.5 32.2h-1.52v-4.64a9.16 9.16 0 0 0-9.08-9.19H9.08c-5 0-9.08 4.13-9.08 9.19v42.86a9.16 9.16 0 0 0 9.08 9.19H43.9c5 0 9.08-4.13 9.08-9.19v-3.41h1.52c.41 0 .75-.34.75-.76V52.47a.76.76 0 0 0-.76-.77h-1.51v-8.79h1.52c.83 0 1.5-.68 1.5-1.53v-7.65c0-.84-.67-1.53-1.5-1.53Zm-20.42-3.11c2.93 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.35c-2.92 0-5.3-2.4-5.3-5.35a5.33 5.33 0 0 1 5.3-5.36Zm-15.13 0c2.92 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.35c-2.93 0-5.3-2.4-5.3-5.35a5.33 5.33 0 0 1 5.3-5.36ZM5.3 49.39a5.33 5.33 0 0 1 5.3-5.35c2.92 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.36c-2.93 0-5.3-2.4-5.3-5.36Zm13.64 19.5c-2.92 0-5.3-2.4-5.3-5.35a5.33 5.33 0 0 1 5.3-5.36c2.93 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.35Zm1.5-19.9a6.09 6.09 0 0 1 6.05-6.12 6.09 6.09 0 0 1 6.06 6.12 6.09 6.09 0 0 1-6.06 6.13 6.1 6.1 0 0 1-6.05-6.13Zm13.64 19.9c-2.92 0-5.3-2.4-5.3-5.35a5.33 5.33 0 0 1 5.3-5.36c2.93 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.35Zm8.3-14.13c-2.92 0-5.3-2.4-5.3-5.36a5.33 5.33 0 0 1 5.3-5.36c2.93 0 5.3 2.4 5.3 5.36a5.33 5.33 0 0 1-5.3 5.36ZM9.65 15.31h33.68c.85 0 1.44-.68 1.3-1.51l-1.6-10.77A3.68 3.68 0 0 0 39.5 0H13.47a3.68 3.68 0 0 0-3.51 3.03L8.34 13.8c-.12.83.46 1.51 1.3 1.51ZM43.33 82.67H9.65c-.85 0-1.43.68-1.3 1.52l1.6 10.76a3.68 3.68 0 0 0 3.52 3.03h26.04a3.68 3.68 0 0 0 3.51-3.02l1.62-10.77a1.28 1.28 0 0 0-1.3-1.52Z" fill="#363636"/></svg>`
  },{
    link: 'drons',
    title: 'Квадракоптеры',
    icon: `<svg class="img-6" aria-hidden="true" focusable="false" width="132" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.05.26C6.51.75 1.84 1.86.58 2.93c-.73.62-.73.62-.24 1.16C1 4.8 4.06 5.73 7.6 6.32c4 .67 12.51.7 13.72.05 1.22-.66 1.63-1.41 1.63-2.98 0-1.62-.62-2.41-2.22-2.85C19.27.15 14.94 0 12.05.26ZM25.77.49c-.13.28-.25 2.1-.25 4.11 0 4.06.15 3.78-2.2 3.93l-1.03.08-.25 5.09-1.2.28c-2.57.67-3.99 2.6-3.78 5.3.13 1.92 1.03 3.34 2.58 4.08 1.1.52 1.47.54 11.24.54 5.55 0 10.14.08 10.19.18.05.13-1.1 9.4-2.58 20.64-1.44 11.23-2.68 21-2.7 21.67C35.72 68 36.6 69 38.12 69c1.24 0 2.01-.64 2.32-1.9.13-.52 1.5-10.34 3.02-21.83a727.78 727.78 0 0 1 2.94-20.86c.1 0 1.08 1.4 2.2 3.13 2.93 4.63 2.4 4.32 7.63 4.32h4.36v5.63l-5.14.08c-4.72.07-5.2.12-5.88.61-1.57 1.16-1.62 1.42-1.62 10.98 0 9.53.02 9.79 1.52 11.05l.85.7H81.7l.85-.7c1.5-1.26 1.52-1.52 1.52-11.05 0-9.56-.05-9.82-1.63-10.98-.67-.49-1.16-.54-5.88-.61l-5.13-.08v-5.63h4.36c5.23 0 4.7.3 7.63-4.32a25.53 25.53 0 0 1 2.2-3.13c.07 0 1.42 9.4 2.94 20.86 1.52 11.5 2.89 21.31 3.01 21.83.31 1.26 1.09 1.9 2.33 1.9 1.52 0 2.4-1 2.34-2.62-.02-.67-1.26-10.44-2.7-21.67a902.33 902.33 0 0 1-2.58-20.64c.05-.1 4.64-.18 10.19-.18 9.77 0 10.13-.02 11.24-.54 1.55-.74 2.45-2.16 2.58-4.08a4.75 4.75 0 0 0-3.8-5.3L110 13.7l-.26-5.09-1.03-.08c-2.34-.15-2.2.13-2.2-3.93 0-2-.12-3.83-.25-4.11-.2-.36-.54-.49-1.37-.49-.61 0-1.23.13-1.42.3-.2.21-.3 1.47-.3 3.94 0 2.47-.1 3.73-.31 3.93-.18.18-.9.31-1.65.31-1.63 0-1.66.05-1.66 3.11v2.29H32.48v-2.29c0-3.06-.02-3.1-1.65-3.1-.75 0-1.47-.14-1.65-.32-.2-.2-.31-1.46-.31-3.93s-.1-3.73-.3-3.93C28.37.13 27.75 0 27.13 0c-.82 0-1.16.13-1.37.49ZM68.62 40.6c2.89.9 5.39 3.4 6.16 6.17.44 1.54.31 4.21-.28 5.78a10.23 10.23 0 0 1-4.57 4.94c-1.29.64-1.75.71-3.92.71-2.16 0-2.63-.07-3.92-.71a10.22 10.22 0 0 1-4.56-4.94c-.6-1.57-.73-4.24-.29-5.78a9.58 9.58 0 0 1 6.06-6.17 7.56 7.56 0 0 1 5.32 0Z" fill="#363636"/><path d="M63.8 44.44c-2.04.92-3.51 3.65-3.07 5.73a5.43 5.43 0 0 0 8 3.7 5.3 5.3 0 0 0 2.44-5.78 5.38 5.38 0 0 0-5.16-4.14c-.64 0-1.62.23-2.22.49ZM36.1.15c-3.93.67-4.52 1.14-4.52 3.45 0 1.82.46 2.41 2.27 2.95 1.55.47 7.17.52 10.5.13 6.86-.82 11.32-2.54 9.7-3.75-1.27-.9-4.9-1.88-9.06-2.39-2.47-.3-8-.54-8.9-.39ZM89.48.26c-6.31.59-11.86 2.08-11.86 3.18 0 1.73 7.84 3.47 15.63 3.5 5.8 0 7.2-.64 7.2-3.34 0-1.83-.62-2.62-2.38-3.09C96.42.11 92.4 0 89.48.26ZM112.78.28c-1.78.23-3.02.77-3.43 1.5-.4.76-.31 2.9.15 3.57.93 1.3 1.65 1.46 7.07 1.46 3.66 0 5.8-.13 7.87-.49 3.53-.59 6.6-1.51 7.24-2.23.5-.54.5-.54-.23-1.16-1.34-1.13-5.96-2.18-11.92-2.67-3.48-.29-4.48-.29-6.75.02Z" fill="#363636"/></svg>`
  },]
  return(
    <div className={styles.categories_container}>
      {categorieItems.map((item) => <CategoryItem key={item.link} {...item}></CategoryItem>)}
    </div>
  )
}

export default Categories;