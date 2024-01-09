from BinaryTree import TNode

morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
}


def make_morse_tree():
    root = TNode(None, None, None)
    for key in morse:
        code = key
        node = root
        for c in code:
            if c == '.':
                if node.left == None:
                    node.left = TNode(None, None, None)
                node = node.left
            elif c == '-':
                if node.right == None:
                    node.right = TNode(None, None, None)
                node = node.right
        node.data = morse[key]
    return root


def decode(root, code):
    node = root
    for c in code:
        if c == '.':
            node = node.left
        elif c == '-':
            node = node.right
    return node.data


def encode(ch):
    for k, v in morse.items():
        if v == ch:
            return k


print(encode('g'))

morseCodeTree = make_morse_tree()
mlist = ['--.', '.-', '--', '.', '---', '...-', '.', '.-.']
for code in mlist:
    ch = decode(morseCodeTree, code)
    print(ch, end='')
