import * as fs from 'node:fs';
export function json_file_update(filename: string, new_json: any) {
  fs.writeFileSync(filename, JSON.stringify(new_json, null, 2))
}