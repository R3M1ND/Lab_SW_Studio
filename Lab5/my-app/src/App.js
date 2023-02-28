import './App.css';
import Box from './BoxComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="font-head">โหวตอาหาร</div>
        <Box
          type="อาหารคาว"
          menu="ข้าวผัด"
          descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque ante, congue vel aliquam sagittis, gravida nec mauris. Quisque vitae rutrum mauris. Pellentesque nec enim quis nibh cursus egestas. Ut malesuada volutpat massa id interdum. Fusce volutpat nisl enim, non luctus orci pretium id. Maecenas vel pretium sapien. Integer ullamcorper id turpis quis ultrices."
          img="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixl
          ib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        />
        <Box
          type="อาหารหวาน"
          menu="บัวลอย"
          descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tristique augue a feugiat. Suspendisse scelerisque ante purus, a gravida ipsum tristique at. Mauris in dui in diam sodales finibus. Aliquam sit amet ultrices nunc. Curabitur at porta dolor. Fusce non nisl egestas, egestas ipsum eleifend, varius dolor. Morbi volutpat mattis blandit. "
          img="https://aroi-mark.com/wp-content/uploads/2020/10/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%AD%E0%B8%A21.jpg"
        />
      </header>
    </div>
  );
}

export default App;
