pragma solidity 0.8.17;

contract Emitter {
  event Transfer(uint amount);

  function transfer(uint value_) public {
    emit Transfer(value_);
  }
}