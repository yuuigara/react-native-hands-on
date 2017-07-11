/*

# ゴール

Chapter 1 〜 chapter 5 までの内容の総まとめ。
FIXMEの部分を修正し、後述する仕様を満たすToDoアプリを完成させる。

# 仕様

## コンポーネントの階層構造

- App (自作)
  - View (ReactNative)
    - InputField (自作)
      - View (ReactNative)
        - TextInput (ReactNative)
    - ToDoItem (自作)
      - View (ReactNative)
        - TouchableHighlight (ReactNative)
        - Text (ReactNative)
    - ...

## 機能

1. 画面最上部にテキストを入力するフォームがある
2. 入力フォームの下がリストになっている
3. 入力フォームに文字を入力し、入力が完了するとリストの最下部にToDoが追加される
4. リストの一つ一つの行がToDoの内容となっている
5. ToDoをタップすると、完了＝リストから消える

# 手順

1. FIXME部分を適切に書き換える
2. FIXMEには、props/state/setState/Component名、が入る

*/

import React, { Component } from 'react';
/* Chapter 1. Component を使う（importする） */
import { StyleSheet, View, Text, FIXME, FIXME } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  toDoItem: {
    height: 40,
  },
  toDoItemText: {
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 20,
  }
});

export default class App extends Component {
  constructor () {
    super();
    /* Chapter 4. Component に状態を持たせる（初期状態を与える） */
    this.FIXME = {
      items: [
        '一つ一つの行がTODOになっています',
        'タップすることで完了＝リストから消えます',
        '画面上のエリアに文字を入力して',
        '入力が完了すると',
        'リストの最下部にTODOが追加されます',
      ]
    };
  }

  /* 入力フォームでの入力が完了した際に呼ばれるメソッド */
  /* 配列の末尾に渡されたテキストが挿入されるように実装してある */
  addItem (content) {
    /* Chapter 5. Component の状態を変化させる */
    this.FIXME((prevState) => {
      let items = prevState.items.concat();
      items.push(content);
      return { items: items }
    })
  }

  /* ToDoがタップされた時に呼ばれるメソッド */
  /* 配列のkey番目の要素が削除されるように実装してある */
  removeItem (key) {
    /* Chapter 5. Component の状態を変化させる */
    this.FIXME((prevState) => {
      let items = prevState.items.concat();
      items.splice(key, 1);
      return { items: items }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        {/* Chapter 1. Component を使う */}
        <FIXME onPressButton={(content) => {this.addItem(content)}} />
        {
          this.state.items.map((item, i) => (
            /* Chapter 1. Component を使う */
            <FIXME
              key={i}
              index={i}
              content={item}
              onPressItem={(i) => { this.removeItem(i) }}
            />
          ))
        }
      </View>
    )
  }
}

class InputField extends Component {
  constructor () {
    super();
    /* 入力フォームに入力されたテキストを状態として持つ */
    /* Chapter 4. Component に状態を持たせる */
    this.FIXME = {text: ''}
  }

  /* 入力フォームの入力が完了した時に呼ばれるメソッド */
  /* Appコンポーネントにフォームの入力内容を伝えるとともに */
  /* InputFieldコンポーネントの状態（入力されたテキストの情報）を初期化する */
  saveAndClear () {
    /* Chapter 3. 親Component から値を渡す（渡された値を使う） */
    this.FIXME.onPressButton(this.FIXME.text);

    /* Chapter 5. Component の状態を変化させる */
    this.FIXME({text: ''});
  }

  render () {
    return (
      <View style={styles.inputField}>
        {/* Chapter 4. Component に状態を持たせる（現在の状態を参照する） */}
        {/* Chapter 3. 親Component から値を渡す（TextInputに値を渡す） */}
        <TextInput
          onChangeText={(text) => this.setState({text: text})}
          value={this.FIXME.text}
          style={styles.textInput}
          onEndEditing={() => { this.saveAndClear() }}
          placeholder='ここにテキストを入力してください'
        />
      </View>
    )
  }
}

class ToDoItem extends Component {
  render () {
    return (
      <View style={styles.toDoItem}>
        {/* Chapter 3. 親Component から値を渡す（渡された値を使う） */}
        <TouchableHighlight onPress={() => { this.FIXME.onPressItem(this.FIXME.index) }}>
          <Text style={styles.toDoItemText}>
            {/* Chapter 3. 親Component から値を渡す（渡された値を使う） */}
            {this.FIXME.content}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
