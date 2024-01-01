import os
import hashlib


def generate_hash(file_path, algorithm='md5'):
    hash_object = hashlib.new(algorithm)
    with open(file_path, 'rb') as file:
        while chunk := file.read(8192):
            hash_object.update(chunk)
    return hash_object.hexdigest()


directory = "data"

# List all files in the specified directory
files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Iterate through each file and generate hash values
for filename in files:
    file_path = os.path.join(directory, filename)
    md5_hash = generate_hash(file_path, 'md5')
    sha256_hash = generate_hash(file_path, 'sha256')

    print(f"File: {filename}")
    print(f"   MD5 Hash: {md5_hash}")
    print()

