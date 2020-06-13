export default function(data) {
  const tree = document.querySelector('nav#tree')

  const menu = document.createElement('ul')

  const li = document.createElement('li')





  li.innerHTML = 'Electronics'
  menu.append(li)
  tree.append(menu)
}