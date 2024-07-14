class Stack {

    constructor(){
    
    this.item=[]
    this.index=0
    
    }
    
    push(i){
        
      this.item[this.index]=i  // STACK[3]=4
      console.log(`${i} is pushed in ${this.index}`)
      this.index++
    //[4]
    }
    
    // LIFO
    
    pop(){
    
   const pop_element = this.item[this.index- 1]
   
   this.index--
   console.log(`${pop_element} is poped from ${this.index}`)

   this.item.length--

return pop_element

    }
    
    isEmpty(){
      if(this.item == 0){
      console.log("stack is empty !!")

      }else{
        console.log("stack is not empty !!")
        }
    }  


    length(){
      console.log(this.item.length)
    }


}





    
    const new_stack = new Stack()
    
    new_stack.length()
    
    new_stack.isEmpty()
    
    new_stack.push(1) 
    new_stack.push(2)
    
    new_stack.length() 
    
    new_stack.isEmpty()
    
    new_stack.push(3)
    
    new_stack.length()
    
    new_stack.push(4) //3

    new_stack.length()
    
    new_stack.pop()
    new_stack.pop()
    new_stack.pop()
    
    new_stack.length()
    
    new_stack.isEmpty()
    
    new_stack.pop()
    
    new_stack.isEmpty()
  
    



    