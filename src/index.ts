type Value = string | boolean | null | undefined;
type Input = string | Value[];

function handleNode(node: Value) {
  if (typeof node !== 'string') return [];
  const string = node.trim();
  return string.length > 0 ? string.split(/\s+/) : [];
}

function handleArray(array: Value[]) {
  return array.reduce<string[]>((acc, node) => {
    const result = handleNode(node);
    return result.length > 0 ? [...acc, ...result] : acc;
  }, []);
}

export function ext(input: Input) {
  if (typeof input === 'string') return handleNode(input).join(' ');
  return handleArray(input).join(' ');
}

export default ext;
